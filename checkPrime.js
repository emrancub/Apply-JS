let n = 128;
for (i = 2; i < n; i++){
    console.log(i, n%i);
    if(n % i == 0){
        console.log('Not Prime Number');
        break;
    }
    else{
        console.log('prime Number');
        break;
    }
}
function largestNumber (numbers){
    let large = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element > large){
            large = element;
        }
    }
    return large;
}
let output = largestNumber([25, 69, 78, 458, 954, 457]);
console.log('Output: ', output);

let numbers = [78, 6945, 4547, 782, 2132, 4587];
const output2 = largestNumber(numbers);
console.log(output2);
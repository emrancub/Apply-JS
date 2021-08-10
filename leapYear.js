function isLeapYear(year){
    if(year % 4 ==0 && year % 100 != 0 || year % 400 == 0){
        return true;
    }
    else{
        return false;
    }
}
const checkYear = isLeapYear(1700);
console.log(checkYear);

// const year = 2000;
// if(year % 4 == 0 && year %100 != 0 || year % 400 == 0 ){
//     console.log('Leap Year');
// }
// else{
//     console.log('Not Leep year');
// }
// using function and do this work multiple time
function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}
var seniorPerson = [458, 125, 968, 458];

var dadaFeet = inchToFeet(seniorPerson[0]);
var dadaFloor = dadaFeet.toFixed();
console.log(dadaFloor);

var nanaFeet = inchToFeet(156);
console.log(nanaFeet);

var naniFeet = inchToFeet(280);
console.log(naniFeet);


// // indivitual Output
// var inch = 156;
// var feet = inch / 12;
// console.log(feet);
//This is my age in human years
let myAge = 13;

//the variable of earlyYears assigned to the value of 2
let earlyYears = 2;
earlyYears *= 10.5;

//this line below subtracts 2 from my age which is the later years
let laterYears = myAge - 2;
//This is to calculate the number of dog years accounted for my later years
laterYears *= 4;

console.log (earlyYears, laterYears); //just to check whether my codes are correct

let myAgeInDogYears = earlyYears + laterYears; //this will just add the result of earlyYears and laterYears

//This is so the next code that shows text will show up having all lower case letters
let myName = 'Jostelle Shaina'.toLowerCase();

//This part will have the parts with the $() changed to what the result brought
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`)

/* When I had changed my age to 13 
My early years was 21 while my later years was 44.
and when it was in sentence form, my age and my age in dog years had also changed to this;
My name is jostelle shaina. I am 13 years old in human years which is 65 years old in dog years
*/
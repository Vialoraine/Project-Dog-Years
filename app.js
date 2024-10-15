//My current age
const myAge = 29;

//Initializing earlyYears to have a value of 2
let earlyYears = 2;
earlyYears = earlyYears * 10.5;

//Initializing laterYears to have a value of myAge - 2
let laterYears = myAge - 2;
laterYears = laterYears * 4;

//My age in dog years
const myAgeInDogYears = earlyYears + laterYears;

//My name in lowercase
const myName = 'Loraine'.toLowerCase();

//Answers
console.log(`earlyYears: ${earlyYears} laterYears: ${laterYears}`);
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`);

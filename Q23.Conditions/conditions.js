"use strict";
/*Q23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
let car = 'subaru';
// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car === 'subaru');
// Test 2
console.log("Is car != 'car'? I predict True.");
console.log(car !== 'car');
// Test 3
console.log("Is car === 'Car'? I predict False.");
console.log(car === 'Car');
// Test 4
console.log("Is car !== 'Bus'? I predict False.");
console.log(car !== 'Bus');
// Test 5
console.log("Is car.length > 2? I predict True.");
console.log(car.length > 2);
// Test 6
console.log("Is car.startsWith('s')? I predict True.");
console.log(car.startsWith('s'));
// Test 7
console.log("Is car.includes('u')? I predict True.");
console.log(car.includes('u'));
// Test 8
console.log("Is car.charAt(1) === 's'? I predict False.");
console.log(car.charAt(1) === 's');
// Test 9
console.log("Is car.toLowerCase() === 'SUBARU'? I predict True.");
console.log(car.toLowerCase() === 'subaru');
// Test 10
console.log("Is car.indexOf('a') !== -1? I predict False.");
console.log(car.indexOf('a') !== -1);

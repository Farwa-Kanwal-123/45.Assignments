/*Q.24>More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/



// Tests for equality and inequality with strings
const string1: string = "hello";
const string2: string = "world";

console.log(string1 === string2); // False
console.log(string1 !== string2); // True

// Tests using the lower case function
const upperCaseString: string = "HELLO";
const lowerCaseString: string = "hello";

console.log(upperCaseString.toLowerCase() === lowerCaseString); // True
console.log(upperCaseString.toLowerCase() !== lowerCaseString); // False

// Numerical tests
const num1: number = 5;
const num2: number = 10;

console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // False
console.log(num1 < num2); // True
console.log(num1 >= num2); // False
console.log(num1 <= num2); // True

// Tests using "and" and "or" operators
const trueCondition: boolean = true;
const falseCondition: boolean = false;

console.log(trueCondition && falseCondition); // False
console.log(trueCondition || falseCondition); // True

// Test whether an item is in an array
const array: number[] = [1, 2, 3, 4, 5];
const item: number = 3;
console.log(array.includes(item)); // True


// Test whether an item is not in an array
console.log(!array.includes(6)); // True
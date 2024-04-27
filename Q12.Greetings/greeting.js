"use strict";
//Q12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
//an array copy from question 11. 
let names = ["farwa", "bushra", "umaira", "rubab", "sofia"];
let message = " your are my best friend.";
//using for loop to print the same message with each name 
for (let i = 0; i < names.length; i++) {
    console.log(names[i] + message);
}

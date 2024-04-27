"use strict";
/*27. Alien Colors #3:
Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color
alien.*/
//•version 1. If the alien is green, print a message that the player earned 5 points.
let alien_version1 = "green";
if (alien_version1 === "green") {
    console.log("the player earned 5 points.");
}
else if (alien_version1 === "yellow") {
    console.log("the player earned 10 points.");
}
else {
    console.log("the player earned 15 points.");
}
//Version 2• If the alien is yellow, print a message that the player earned 10 points.
let alien_version2 = "yellow";
if (alien_version2 === "green") {
    console.log("the player earned 5 points.");
}
else if (alien_version2 === "yellow") {
    console.log("the player earned 10 points.");
}
else {
    console.log("the player earned 15 points.");
}
//Version 3• If the alien is red, print a message that the player earned 15 points.
let alien_version3 = "red";
if (alien_version3 === "green") {
    console.log("the player earned 5 points.");
}
else if (alien_version3 === "yellow") {
    console.log("the player earned 10 points.");
}
else {
    console.log("the player earned 15 points.");
}

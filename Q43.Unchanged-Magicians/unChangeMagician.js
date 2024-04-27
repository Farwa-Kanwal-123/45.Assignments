"use strict";
/*Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
//start with exercise 42:
// make a show_magicians() function using .forEach method ,that modify the array of elements as a list
function show_magicians(magicians) {
    magicians.forEach(magicians => {
        console.log(`${magicians}`);
    });
}
//Write a function called make_great() to modify the new array using .map() method
function make_great(magicians) {
    return magicians.map(names => `The Great ${names}.`);
}
//make an array of magiciansName
let magiciansNames = ["Ahmed", "Wahab", "Zahid"];
//make copy of an original array through .slice() method
let copy_magicians_name = magiciansNames.slice();
//modify a copied array to include "The Great" with names of array
let copy_great_magicians = make_great(copy_magicians_name);
//show both arrays
//Original
console.log("\nOriginal Array\n");
show_magicians(magiciansNames);
//Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);

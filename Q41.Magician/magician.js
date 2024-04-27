"use strict";
/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/
//Making an Array of magician’s names
let magiciansNames = ["Ahmed", "Zain", "Wahab", "Zahid", "Bilal"];
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magiciansNames) {
    magiciansNames.forEach(magicians => {
        console.log(`${magicians}`);
    });
}
show_magicians(magiciansNames);

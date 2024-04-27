"use strict";
/*City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.
*/
//making a function that takes the name of a city and its country.
function city_country(city, country) {
    return `"${city}","${country}"`; //return a string formatted like this:"Lahore, Pakistan"
}
//Call the function with at least three city-country pairs, and print the value that’s returned.
console.log(city_country("Islamabad", "Pakistan"));
console.log(city_country("Sharja", "Dubai"));
console.log(city_country("Makkah", "Saudi Arabia"));

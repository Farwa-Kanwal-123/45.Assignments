"use strict";
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//making an array of guest list
let guestList = ["Imran Khan", "Kamran Tessori", "Nawaz Shareef", "Zardari"];
//using loop to send invitation to each one in array
for (let i = 0; i < guestList.length; i++) {
    console.log(`Respected ${guestList[i]},\n It is my pleasure to invite you in our dinner party.\nThank You!\n`);
}

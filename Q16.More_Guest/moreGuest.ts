//Q!6.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.//• Add one new guest to the beginning of your array.//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let guestList : string[] = ["Imran Khan","Kamran Tessori","Nawaz Shareef","Zardari"];

console.log(`Unfortunately Mr.${guestList[2]},will be not come to the party.`);

guestList[2] = "Danyal Nagori"

console.log(`\n *NEW GUEST LIST* \n`)

guestList.forEach(function(value){
    console.log(`Respected ${value},\n It is my pleasure to invite you in our dinner party.\nThank You!\n`)});

console.log("congratulation!that we found a bigger dinner table to invite more guests.")

guestList.unshift("Wahab Zahid");
guestList.splice(guestList.length/2,0,"Zahid Sultan");
guestList.push("Ahmed Ali");

guestList.forEach(guest => {
    console.log(`Respected ${guest},\n It is my pleasure to invite you in our dinner party.\nThank You!\n`)})











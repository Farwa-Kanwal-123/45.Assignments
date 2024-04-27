//Q15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.//• Print a second set of invitation messages, one for each person who is still in your list.


//start with exercise 14
//making an array of guest list
let guestList : string[] = ["Imran Khan","Kamran Tessori","Nawaz Shareef","Zardari"];
//using loop to send invitation to each one in array
for(let i=0; i<guestList.length; i++){
   console.log(`Respected ${guestList[i]},\n It is my pleasure to invite you in our dinner party.\nThank You!\n`);
}
//guest who cant make dinner
console.log(`Unfortunately Mr.${guestList[2]},will be not come to the party.`);
//replacing the name
guestList[2] = "Danyal Nagori"
console.log(`\n *NEW GUEST LIST* \n`)
//print new guest list using for loop
for(let a=0; a<guestList.length; a++){
    console.log(`Respected ${guestList[a]},\n It is my pleasure to invite you in our dinner party.\nThank You!\n`);
}






















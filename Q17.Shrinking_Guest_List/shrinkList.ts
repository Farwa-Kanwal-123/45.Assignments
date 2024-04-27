//Q17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.// • Print a message to each of the two people still on your list, letting them know they’re still invited.// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

//SHRINK LIST:
let guestList : string[] = ["Wahab zahid","Imran Khan","Kamran Tessori","Zahid Sultan","Nawaz Shareef","Zardari","Ahmed Ali"];

// //start logic of Q17
console.log("Sorry to say that i can only invite two people.\n");
//remove all members from list accept of 2 members
while(guestList.length > 2){
    let removeGuests = guestList.pop();
    console.log(`Sorry ${removeGuests},i can't invite you in our dinner party.\n`);
}
guestList.forEach(guest => {
    console.log(`Dear ${guest},you are still invited in our dinner party.`)
});
//splice is removing from 0 index to guestList.length,then full array will be empty
guestList.splice(0,guestList.length);
console.log(guestList);
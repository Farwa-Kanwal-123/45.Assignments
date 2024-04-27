// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.// • Print your array in alphabetical order without modifying the actual list.// • Show that your array is still in its original order by printing it.// • Print your array in reverse alphabetical order without changing the order of the original list.// • Show that your array is still in its original order by printing it again.// • Reverse the order of your list. Print the array to show that its order has changed.// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


//Q.18
let places : string[] = ["muree","lahore","sakardu","gilgit","kashmir"];
console.log("Original order: ",places);
//Alphabetical order
console.log("Alphabetical order: ",[...places].sort());
//original order
console.log("Original order: ",places);
//reverse Alphabetical order
console.log("reverse Alphabetical order: ", [...places].sort().reverse());
//original order
console.log("Original order: ",places);
//change original order of array into reverse array
console.log("changed order of array into reverse: ",places.reverse());
//chnaged order into orignal array
console.log("change reverse array into original array: ",places.reverse());
//sort the array in alphabetical order
let  Alphabetical_array = places.sort();
console.log("sort the array in alphabetical order: ",Alphabetical_array);
//sort array into reverse Alphabetical order
let reverse_alphabetical_order = Alphabetical_array.sort();
console.log("sort array into reverse Alphabetical order: ",reverse_alphabetical_order.reverse() );

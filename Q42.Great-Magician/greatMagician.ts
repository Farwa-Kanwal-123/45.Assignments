/*Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/


// Start with a copy of program from Exercise 41.
let magiciansNames:string[] = ["Ahmed","Wahab","Zahid"];
// make a show_magicians() function using .forEach method ,that modify the array of elements as a list
function show_magicians(magicians:string[]){
    magicians.forEach(magicians => {
        console.log(`${magicians}`);
    })
}
//Write a function called make_great() to modify the array
function make_great(magicians : string[]){
   return magicians.map(names =>`The Great ${names}.`);
}
//call make great function to modify the array
let great_magicians=make_great(magiciansNames);

//call show_magicians function to show modified list of magicians
show_magicians(great_magicians);

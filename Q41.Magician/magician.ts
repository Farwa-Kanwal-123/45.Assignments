/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/

//Making an Array of magician’s names
let magiciansNames:string[] = ["Ahmed","Zain","Wahab","Zahid","Bilal"];
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magiciansNames:string[]){
    magiciansNames.forEach(magicians =>{
        console.log(`${magicians}`);
    })
}
show_magicians(magiciansNames);
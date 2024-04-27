//Q3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName : string = "zahid sultan";

let lowerCase : string = personName.toLowerCase();
let upperCase : string = personName.toUpperCase();
let titleCase = personName.split(" ").map(word => word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(" ");

console.log(lowerCase);
console.log(upperCase);
console.log(titleCase);


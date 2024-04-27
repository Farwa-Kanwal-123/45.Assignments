/*31. No Users: 
Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/


let usernames :string[] = ["zahid","wahab","ahmed","zain","admin"];
// if test to make sure the list of users is not empty.
if(usernames.length > 0){
    usernames.forEach(usernames => {
        console.log(`${usernames}`);
    })
}else{
    console.log(" We need to find some users!");
}

// Remove all of the usernames from your array, and make sure the correct message is printed.*/
let usernames1 : string[] = [];
if(usernames1.length > 0){
    usernames1.forEach(usernames1 => {
        console.log(`${usernames1}`);
    })
}else{
    console.log("We need to find some users!");
}
/*37. Large Shirts: 
Modify the make_shirt() function so that shirts are large by default, with a message that reads 
I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
size with a different message.*/

//making a function with a default size and message
function make_shirt(size:string = "large",message:string ="I Love Typescript!"){
    console.log(`Making a "${size}" size shirt with a message "${message}" is printed on it.`);
}
make_shirt();// invoking default function for large size shirt.
make_shirt("medium","I like Coding!");//invoking default function for medium size shirt.
make_shirt("small","I love Football!");//invoking default function of small size shirt.
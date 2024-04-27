/*29. Favorite Fruit: 
Make an array of your favorite fruits, and then write a series of independent if statements that 
check for certain fruits in your array.
• Make an array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit 
is in your array, the if block should print a statement,
such as You really like bananas!*/



//• Make an array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits : string[] = ["apple","mango","banana"];
if(favorite_fruits.includes("apple")){
    console.log(" You really like apples");
}

if(favorite_fruits.includes("cherry")){
    console.log(" You really like cherries");   
}
if(favorite_fruits.includes("mango")){
    console.log(" You really like mangoes");   
}
if(favorite_fruits.includes("melon")){
    console.log(" You really like melons ");   
}
if(favorite_fruits.includes("banana")){
    console.log(" You really like bananas");
}


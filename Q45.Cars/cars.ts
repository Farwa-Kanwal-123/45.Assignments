/*Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature.Print the Object that’s returned to make sure all the information was stored correctly.*/



//make a function createCar() that stores information about a car in an Object
function createCar(manufacturer:string,model:string,...options:{[key:string]:any}[]):object{
   let car = {
    manufacturer: manufacturer,
    model : model,
    ...Object.assign({},...options)  //...Object.assign() method is used for unknown OBJECT{key:value} arrguments 
   }
   return car;
}
//call the function to create objects
let myCar = createCar("Toyota","Corolla",{color : "red"},{features : "true"});
//Print the Object that’s returned to make sure all the information was stored correctly.
console.log(myCar);



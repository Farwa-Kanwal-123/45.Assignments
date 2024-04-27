/*38. Cities: 
Write a function called describe_city() that accepts the name of a city and its country. The 
function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the 
country a default value. Call your function for three different cities, at least one of which is not in the
default country.*/

//make a function of city describe
function describe_city(city:string, country:string="Pakistan")//parameter for the country a default value
{
   console.log(`${city} is in ${country}!`);
}
//invoking function...only value of city give in arrgument and pakistan is default value given in parameter
describe_city("Islamabd");
describe_city("Karachi");
describe_city("Sharja","Dubai");//given both values because sharja is not in pakistan
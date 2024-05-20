//task #1 is to let kelvin be constantly 293
const kelvin = 0;
console.log(kelvin);

//task #3 is how we will get the celsius
let celsius = kelvin - 273;
console.log(celsius);

//task #5 is how we will get the fahrenheit hehe
let fahrenheit = celsius * (9/5) + 32;
//kani kay ma round down ang fahrenheit depende sa unsa ang result teehee
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
console.log(`The temperature is ${kelvin} degrees Kelvin`)
console.log(`The temperature is ${celsius} degrees Celsius`)

/* If Kelvin is 0 degrees,
The temperature will be -460 degrees Fahrenheit
The temperature will be -273 degrees Celsius
*/
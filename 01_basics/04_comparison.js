console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // it will give true because 
//Th reason is that an equalitu check == and comparisons > < >= <=
//work differently.
//Comparisons convert null to a number, treating it as 0.
//That's why(console.log(null >= 0);) null >=0 is true 
//and null >= 0 is false


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);

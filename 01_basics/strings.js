const name = "hitesh";
const repoCount = 50;

// Using template literals for better readability and variable interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Creating a string using the String constructor
const gameName = new String('hitesh-hc-com');

// Accessing the first character of the string
console.log(gameName[0]); // Output: 'h'

// Displaying the prototype of the string object (advanced, used internally by JS)
console.log(gameName.__proto__);

// Getting the length of the string
console.log(gameName.length); // Output: 14

// Converting the string to uppercase
console.log(gameName.toUpperCase()); // Output: 'HITESH-HC-COM'

// Fetching the character at index 2
console.log(gameName.charAt(2)); // Output: 't'

// Finding the first occurrence of the character 't'
console.log(gameName.indexOf('t')); // Output: 2

// Extracting a substring from index 0 to 4 (excluding 4)
const newString = gameName.substring(0, 4);
console.log(newString); // Output: 'hite'

// Using `slice` with negative indexing, which starts from the end of the string
const anotherString = gameName.slice(-8, 4); // Slice doesn’t work when end < start
console.log(anotherString); // Output: ''

// Removing extra spaces from the start and end of a string
const newStringOne = "   hitesh    ";
console.log(newStringOne); // Output: '   hitesh    ' (with spaces)
console.log(newStringOne.trim()); // Output: 'hitesh'

// Replacing '%20' in the URL with a hyphen '-'
const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-')); // Output: 'https://hitesh.com/hitesh-choudhary'

// Checking if a substring exists in the string
console.log(url.includes('sundar')); // Output: false (since 'sundar' is not in the URL)

// Splitting the string into an array using '-' as a delimiter
console.log(gameName.split('-')); // Output: ['hitesh', 'hc', 'com']

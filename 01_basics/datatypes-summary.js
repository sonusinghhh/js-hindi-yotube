// primitive 

// 7 types : String , number , boolean , null , undefined , symbol , bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 325432464352563787698n

// Reference (Non Primitive)

//Array , Objects , Functions

const heros = ["shaktiman" , "naagraj" , "doga"];

let myObj = {
    name : "hitesh",
    age : 22,
}

const myFunction = function(){
    console.log("Hello world");
}


console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
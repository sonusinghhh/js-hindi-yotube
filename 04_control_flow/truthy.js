const userEmail = []
if(userEmail){
    console.log("Got user email");
    
}
else{
    console.log("Don't have user email");
    
}

// falsy values
// false , 0 , -0 , BigInt 0n , "" , null , undefined , Nan

//truthy values 
// "0" , 'false' , " " , [] , {} , function(){}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

//Nullish Coalescing Operatot(??) : null undefined 
let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 14

console.log(val4);

// Terniary Operator 

//condition ? True : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");



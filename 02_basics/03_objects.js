//singleton
// Object.create

//obkect literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Sonu",
    "full name" : "Sonu Singh",
    [mySym]: "myKey1" ,
    age : 18,
    location : "Jaipur",
    email: "sonu@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "sonusingh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sonusingh@microsot.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");   
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

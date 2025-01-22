// const programming = ["js" , "rb" , "py" , "java" , "cpp"]

// programming.forEach(function (val){
//     console.log(val);  
// })

// programming.forEach((item) => {
//     console.log(item);
    
// })

// function printme(item){
//     console.log(item);
    
// }

// programming.forEach(printme)

const  myCoding = [
    {
        languageName : "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "pyton",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    
})

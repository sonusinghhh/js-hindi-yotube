//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUSer = {
    email : "some@gmail.com",
    fullName : {
        userfullName : {
            firstName : "sonu",
            lastName : "singh"
        }
    }
}

//console.log(regularUSer.fullName.userfullName.firstName);

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}
const obj3 = {5 : "a" , 6 : "b"}

//const obj4 = {obj1 , obj2}
//const obj4 = Object.assign({}, obj1 , obj2 , obj3)

const obj4 = {...obj1 , ...obj2}
//console.log(obj4);

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
   ]

//console.log(users[1].email)

//console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

//console.log(course.courseInstructor)

const {courseInstructor : instructor} = course
//console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]




// Day 5 of javascript :today we create a huge data of avengers and perform some action on it
//Array of obeject
const users=[
    {
        id:1,
        name:"tony shark",
        gender:"male",
        age:50,
        isAvenger:true,
        tags:["Human","Inteliigent"],
    },
    {
        id: 2,
        name: "Steve Rogers",
        gender: "Male",
        age: 110,
        isAvenger: true,
        tags: ["SuperHuman", "Inteliigent"],
    },
    {
        id: 3,
        name: "Natasha Romonova",
        gender: "Female",
        age: 32,
        isAvenger: true,
        tags: ["Human", "Spy"],
    },
    {
        id: 4,
        name: "Peter Parker",
        gender: "Male",
        age: 24,
        isAvenger: false,
        tags: ["SuperHuman", "Super Strength"],
    },
    {
        id: 5,
        name: "Steven Stranger",
        gender: "Male",
        age: 40,
        isAvenger: false,
        tags: ["Doctor", "Magic"],
    },
    {
        id: 6,
        name: "Thor Odinson",
        gender: "Male",
        age: 1500,
        isAvenger: true,
        tags: ["Demigod", "Mjonir"],
    },
    {
        id: 7,
        name: "Captain Marvel",
        gender: "Female",
        age: 140,
        isAvenger: true,
        tags: ["Super Strength", "Flight"],
    },
]
// Print the users data
// console.log(users);

// 1) Print all the Users Name Only
// for(let i=0;i<users.length;i++){
//     console.log(users[i].name);
// }

// 2)Print all the name of users without using for loop
for(let userName of users){
    console.log(userName.name);
}


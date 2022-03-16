//Objects

let obj = {

};

// let student = {
//     student_1 : 'Oliver',
//     student_2 : 'Dheeksha',
//     student_3 : 'Wayne',
//     student_4 : 'Henry'

// }

// console.log(student);
// // display a pair inside an object
// console.log(student.student_1);
// console.log(student['student_1']);

// let a = 'student_2';
// console.log(student.student_2);
// console.log(student[a]);


let database =  {
    student_1: {
        name: 'Oliver',
        surname: 'Ah You',
        age: 25,
        address: 'Rose-Hill',
        hobbies: ['reading', 'coding']
    },
    student_2: {
        name: 'Dheeksha',
        surname: 'Radhoa',
        age: 20,
        address: 'Quatre-Bonne',
        hobbies: ['gym','running']

    },
    student_3:{
        name: 'Wayne',
        surname: 'Celestine',
        age: 18,
        address: 'Phoenix',
        hobbies: ['football', 'coding']
    },

    student_4:{
        name: 'Henry',
        surname: 'Oko',
        age: 18,
        address: 'Beau Bassin',
        hobbies: ['swimming', 'footbal']
    }
}

//Add change object properties

database.student_2.age = 21;
console.log(database);

//add new object
database.student_3.laptop = 'Macbook Air';
console.log(database);

//access the array

console.log(database.student_4.hobbies[1]);

//delete object 
delete database.student_3.hobbies;
console.log(database);

//Exercise

let user = {
   
       username: 'herraph',
       password: 'lucky'
   
}

let database_1 = [user];

let newsfeed = [
    {
        username: 'username1',
        timeline: 'timeline1'
    },
    {
        username: 'username2',
        timeline: 'timeline2'
    },
    {
        username: 'username3',
        timeline: 'timeline3'
    }
]


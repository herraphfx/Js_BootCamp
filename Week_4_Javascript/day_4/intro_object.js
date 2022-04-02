

let student_obj = {
    student_1 : 'Dheeksha',
    student_2 : ' Oliver',
    student_3 : 'Henry',
    student_4 : 'Wayne'
}

console.log(Object.keys(student_obj));  //Return index

console.log(Object.values(student_obj)); //Return values

console.log(Object.entries(student_obj)); //Retunr entire arrays


let student_arr = [
 ['student_1', 'Dheeksha'],
 ['student_2', ' Oliver'],
   [ 'student_3', 'Henry'],
    ['student_4', 'Wayne']
]

console.log(Object.fromEntries(student_arr)); //convert arrays to objects

// let myObj = {
//     name : "John",
//     lastName : "Doe",
//     age : 25,
//     friends : ["Mark", "Lucie", "Ana"]
// }

// console.log(Object.keys(myObj).length);

// console.log(Object.values(myObj).length);

// let entries = Object.entries(myObj);

// entries.forEach((item, i)=> {
//     console.log(`The ${i+1}# key is: ${item[0]} The ${i+1}# value is: ${item[1]}`);

// });

//Object Destructuring 



const address = {
    street: 'Evergreen Terrace',
    number: '742',
    city: 'Springfield',
    state: 'NT',
    zip: '49007',
  };

  const {street: s, city: c} = address; // 

  console.log(s);
  console.log(c);

  //Nested Object Destructuting

  const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63
    }
};

const {name, score: maths } = student;

console.log(`${name} has scored ${maths} in exams`);

function displaySummary(student_obj){
    console.log(`Hello, ${student_obj.name}`);
}

displaySummary(student);

//Without destructuring 
function displaySummary(student) {
    console.log('Hello, ' + student.name);
    console.log('Your Maths score is ' + (student.scores.maths || 0));
    console.log('Your English score is ' + (student.scores.english || 0));
    console.log('Your Science score is ' + (student.scores.science || 0));
}

//with destructing

function displaySummary2({name, scores: {maths = 0, english =0, science =0}}) {
    console.log('Hello, ' + name);
    console.log('Your Maths score is ' + maths);
    console.log('Your English score is ' + english);
    console.log('Your Science score is ' + science);
}

displaySummary2(student);

//Convert string to object
let str = 'abcdefgh';

let obj4 = {...str}

console.log(obj4);

//convert array to object
let arr = ['a','b','c','d','e','f','g','h'];
let obj5 = {...arr}
console.log(obj5); 













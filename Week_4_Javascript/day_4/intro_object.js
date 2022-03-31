

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

  









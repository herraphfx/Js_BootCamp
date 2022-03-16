console.log(
    "THis is JS"
)


let a = 2;
let b = 5;
let sum = a + b;
console.log(sum);

//undefined, variable that does not have a value
let A;
console.log(A);

let str = "Today is a a beautiful day";
let str3 = "hello"
console.log(str);

let str1 = "1"; 
let str2 = "2"

console.log(str1 + str2);

//string methods

console.log(str.indexOf('0'));
console.log(str3.substring(1));
console.log(str3.substring(
    str3.indexOf('e'),
    str3.indexOf('o') + 1
))

console.log(str3.replace('o', 'a'));


//NUmber methods
//toString()

let num1 = 4;
let num2 = 3;
console.log(num1);
console.log(num1.toString());

//toFixed
let pi = 3.14159266535;
console.log(pi.toFixed(3));

//Boolean
let var1 =5;
let var2 = "5";

console.log(Boolean(var1==var2));
console.log(Boolean(var1===var2));
console.log(Boolean(var1 != var2));

//Arrays

console.log("Arrays");

let students = [ 
    "Oliver", 
    "Dheeksha", 
    "Henry", 
    "Wayne", 
    "Julie", 
    "Bashir"];
//Get element from arrays
    console.log(students);

    console.log(students[0]);

    console.log(students[2]);

    console.log(students.length);

    //Update an element in array
    students[0] = "Ah-Fat";

    console.log(students[6]);

    //Add new element
    students[6] = "Damien"
    console.log(students);

    //Add new element at the end
    students[students.length] = "Damien";
    console.log(students);

    students[10] = "Samuel Eto'o";
    console.log(students);

    //Array Methods

    //Add new names
    students.push("Yeshna");
    console.log(students);

    //Remove name at last position
    students.pop(students);
    console.log(students);

    //Add and replace

    const months = ["Jan", "March", "April", "June"];
    months.splice(1,0,"Feb"); // 1= Index, 0=element to delete, Feb added element
    console.log(months);

    months.splice(4,1,"May");
    console.log(months);


    //Convert array to string

    monthsstring = months.toString();
    console.log(monthsstring);
    //you can add what you wanna add in between
    monthsstring = months.join("-");
    console.log(monthsstring);

    //Split an element
    stName = "Wayne";
    stNamesplit = stName.split('')
    console.log(stNamesplit);

    console.log(stNamesplit.join(''));

// Array shift removes element at the beginning
let arr_example = [1, 2, 3, 4, 5];
first_elem = arr_example.shift();


// Array unshift add element at the beginning

console.log(arr_example);

arr_example.unshift(5);
console.log(arr_example);


//Nested array


let students_array = [ 
   ["Oliver", 25] , 
   [ "Dheeksha", 20], 
    ["Henry", 29, "Beau Bassin", ['Rafael', 'Liliane']], 
    ["Wayne", 18], 
    ["Julie", 19], 
    ["Bashir", 35]
];

henry_brother = students_array[2][3][0];
console.log(henry_brother);








    

    

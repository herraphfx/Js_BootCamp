

let x = 1 + 3;
let a = 4.5;
let b = 5.9;
let c = Math.sqrt(a * a + b* b);

let studentTeacherRatio = 4/1;
 
//convert to a string
let num = 5;
num.toString();


//convert to a number
let str = "6"

 
st = parseInt(str);
st1 = parseFloat(str);


console.log(st1);
console.log(st);
//Using Number
st2 = Number("3");
//Unsing Unary operator
st3 = +"2";

console.log(st2);
console.log(st3);

let greeting = "hi";
console.log(!!greeting);


let nothing = 0;
console.log(!!nothing);

//If Else Statement


let num1 = prompt("Please enter your number");
 if (num1 % 2 === 0){
     console.log("Please enter a whole number");
 }
 else if(num1 % 2 === 1){
    console.log("The number is odd number");
 }
else{
    console.log("Hey, I asked for a whole number");
}
// let feeling = prompt("How are you feeling ?");

// switch(feeling){
//     case "happy":
//         console.log('Awesomeness');
//         break;
//     case "moody":
//         console.log("not too good");
//         break;
//     case "hungry":
//         console.log("me too soo hungry");
//         break;
//     default:
//         console.log("see you next time");
    
// }

let primes = [2,3,5,7,11];
let names = ["Alice", "Bob", "Charlie"];
let booleans = ["true", "false", "true"];
//Add arrays

let arr = [1,2,3,5];
//add array at the back
arr.push(4);
//add array at beginning
arr.unshift(3);
console.log(arr);

//remove array
let arr1 = [13,14,15];
arr1.length = 2;
console.log(arr1);

let arr2 = [22,23,24,25];
arr2.pop();
console.log(arr2);

//remove from the front
let arr3 = [33,34,35,36];
arr3.shift();
console.log(arr3);



// console.log(num.toString());
// console.log(c);
// console.log(studentTeacherRatio);


function myFunc(){
    alert(c);
}

let instructor = "Damien";
if(instructor === "Damien"){
    console.log("Yes!");
}
else{
    console.log("No");
}




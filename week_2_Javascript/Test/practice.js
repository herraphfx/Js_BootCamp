// let number = 1;
// let sum =0;

// while(number < 12){
//     sum += number;
//     number++;
// }
// console.log(sum)

// function factorial(number){
//     let product = 1;
//     for(let i = number; i >= 1; i--){
//         product *= i
//     }
//     return product;
// }
// console.log(factorial(4));


// function curve(arr, amount){
//     for(let i =0; i < arr.length; i++){
//         arr[i] += amount;
//     }
// }

// let grades = [77,73, 74, 81, 90];
// curve(grades, 6);
// console.log(grades);

// function showScope(){
//     return scope;
// }

// var scope = "global";
// console.log(scope);
// console.log(showScope());

// Recursion

// function factorial(number){
//     if(number == 1){
//         return number;
//     }
//     else{
//         return number * factorial(number-1);
//     }
// }
// console.log(factorial(5));

// function Checking(amount){
//     this.balance = amount;
//     this.deposit = deposit;
//     this.withdraw = withdraw;
//     this.toString = toString;
// }

// function deposit(amount){
//     this.balance += amount;
// }

// function withdraw(amount){
//     if(amount <= this.balance){
//         this.balance -= amount;
//     }
//     if(amount > this.balance){
//         console.log("Insufficient funds")
//     }
// }

// function toString(){
//     return "Balance " + this.balance;
// }

// var account = new Checking(500);


// console.log(account);
// account.deposit(1000);
// console.log(account.toString());

// let numbers = [1,2,3];

// console.log(numbers.length);

// let numberss = new Array(10);
// console.log(numberss);

// let nums = [1,2,3,43,5,6,7,8];
// let sum =0;
// for(let i =0; i < nums.length; i++){
//     sum  += nums[i];
// }
// console.log(sum);

// var sentence = "the quick brown fox jumped over the lazy dog";
// let words = sentence.split(" ");
// for(let i = 0; i < words.length; i++){
//     console.log(words[i])
// }

// var nums = [];

// for(var i =0; i<100; i++){
//     nums[i] = i + 1;
// }
// var samenums = nums;
// nums[0] = 400;

// console.log(samenums[0]);

// function copy(arr1, arr2){
//     for (let i =0; i < arr1.length; i++){
//         arr2[i] = arr1[i];
//     }
// }

// var nums = [];
// for (let i = 0; i< 100; i++){
// }
// let samenums = [];
// copy(nums, samenums);

// nums[0] = 400;

// console.log(nums[0]);

// var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];

// let readtext = prompt("Enter name");

// let position = names.indexOf(readtext);

// if(position >= 0){
//     console.log("Found " + readtext + " at position " + position);
// }


// let position_1 = names.lastIndexOf(readtext);


// console.log('Found at ' + position_1 );

// let namestr = names.join('');
// namestr.slice(0,5);
// console.log(namestr);

// var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
// var dmpDept = ["Raymond", "Cynthia", "Bryan"];

// let itDiv = cisDept.concat(dmpDept);

// itDiv.splice(3,3);
// console.log(itDiv);

// var nums = [1,2,3,4,5];
// nums.push(6);
// console.log(nums);


// let nums = [2,3,4,5];

// let newnum = 1;

// let N = nums.length;

// for(let i = N; i >= 0; i--){
//     nums[i] = nums[i-1];
// }
// nums[0] = newnum;
// console.log(nums);

// let nums = [6,1,2,3,4,5];

// let first = nums.shift();
// nums.push(first);

// console.log(nums);

// var nums = [1,2,3,7,8,9];
// var newElements = [4,5,6];

// nums.splice(3,0, newElements);

// console.log(nums);

// var nums = [1,2,3,4,5];

// nums.reverse();

// console.log(nums);

// function compare(num1, num2){
//     return num1 - num2;
// }

// let nums = [3,1,2,100,4,200];

// nums.sort(compare);
// console.log(nums);

// function square(num1){
//     console.log(num1, num1 * num1);
// }
// let num1 = [1,2,3,4,5,6,7,8]
// num1.forEach(square);

function isEven(num){
    return num % 2 === 0;
}

// let nums = [2,4,6,8,10];

// let even = nums.every(isEven);

// if(even){
//     console.log('All numbers are even ');
// }
// else{
//     console.log('not all numbers ')
// }
// function curve(grade) {
//     return grade += 5;
//     }
// let arr = [1,2,3,4,5,6,7,8,9,10];

// let newGrade = arr.map(curve);

// console.log(newGrade);


// function first(word){
//     return word[0]
// }

// let words = ["for" ,"your", "information"]
// let acronym = words.map(first);
// let acr = acronym.join("");
// console.log(acr);

// function isEven(num){
//     return num % 2 == 0;
// }

// function isOdd(num){
//     return num % 2 != 0;
// }

// let nums = [];
// for (let i =0; i <= 20; i++){
//     nums[i] = i + 1;
// }

// let evens = nums.filter(isEven);
// console.log(evens);

// let odd = nums.filter(isOdd);
//     console.log(odd);

// function passing(num){
//     return num >= 60;
// }

// let grades = [];
// for(let i =0; i < 20; i++){
// grades[i] = Math.floor(Math.random() * 101);
// }

// let passGrades = grades.filter(passing);

// console.log('Grades');
// console.log(grades);
// console.log('Passing Grades');
// console.log(passGrades);

// function afterc(str){
//     if(str.indexOf("cie") > -1){
//         return true;
//     }
//     return false;
// }

// let words = ["recieve","deceive","percieve","deceit","concieve"];

// let misspelled = words.filter(afterc);

// console.log(misspelled);

// let twod = [];

// let rows  = 5;
// for(let i =0; i < rows; i++){
//     twod[i] = [i + 1];
// }
// console.log(twod);

// Array.matrix = function(numrows, numcols, initial){
//     let arr = [];
//     for(let i = 0; i < numrows; i++){
//         let columns = [];
//         for(let j = 0; j < numcols; j++){
//             columns[j] = initial;
//         }
//         arr[i] = columns
//     }
//     return arr;
// }
// let rando = Math.floor(Math.random() * 10);
// let nums = Array.matrix(5,4,rando);

// console.log(nums);

// var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
// let total = 0;
// let average = 0;

for (let row =0; row< grades.length; row++){
    for(let col = 0; col< grades[row].length; col++){
        total += grades[row][col];
    }
    average = total / grades[row].length;
    console.log("Student " + parseInt(row+1) + "average: " + average.toFixed(2));
}



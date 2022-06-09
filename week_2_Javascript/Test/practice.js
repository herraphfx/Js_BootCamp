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

// for (let row =0; row< grades.length; row++){
//     for(let col = 0; col< grades[row].length; col++){
//         total += grades[row][col];
//     }
//     average = total / grades[row].length;
//     console.log("Student " + parseInt(row+1) + "average: " + average.toFixed(2));
// }

// let grades = [[89,77], [76,82,81], [91,94,89, 99]];

// let total = 0;
// let average = 0.0;
// for(let row = 0; row < grades.length;  row++){
//     for ( let col =0; col < grades[row].length; col++){
//         total += grades[row][col]
//     }
//     average = total / grades[row].length;
//     console.log(average);
// }

// function Point(x,y){
//     this.x = x;
//     this.y = y;
// }

// function displayPts(arr){
//   for(let i=0; i < arr.length; i++){
//       console.log(arr[i].x + "," + arr[i].y);
//   }
// }

// let p1 = new Point(1,2);
// let p2 = new Point(3,5);
// let p3 = new Point(2,8);
// let p4 = new Point(4,3);

// let points = [p1, p2, p3 ,p4];

// for(let i = 0; i < points.length; i++){
//     console.log("Point" + parseInt(i+1) + ": " + points[i].x + points[i].y );
// }

// let p5 = new Point(12, 3);
// points.push(p5);
// console.log('After push');
// displayPts(points);

// function weekTemps(){
//     this.dataStore = [];
//     this.add = add;
//     this.average = average;
// }

// function add(temp){
//     this.dataStore.push(temp);
// }

// function average(){
//     let total = 0;
//     for(let i =0; i < this.dataStore.length; i++){
//         total += this.dataStore[i] /2;
//     }
//     return total / this.dataStore.length;
// }
// let thisWeek = new weekTemps();
// thisWeek.add(50);

// console.log(thisWeek.average());

// function List() {
//     this.listSize = 0;
//     this.pos = 0;
//     this.dataStore = []; // initializes an empty array to store list elements
//     this.clear = clear;
//     this.find = find;
// }

// function append(element){
//     this.dataStore[this.listSize++] = element
   
// }

// function find(element){
//     for(let i =0; i< this.dataStore.length; i++){
//         if(this.dataStore[i] == element){
//             return i;
//         }
//     }
//     return -1;
// }

// function remove(element){
//     let foundAt = this.find(element);
//     if(foundAt > -1 ){
//         this.dataStore.splice(foundAt, 1);
//         --this.listSize
//     }
// }

// function toString(){
//     return this.dataStore;
// }

// const array1 = [1,2,3,4,5];


// const sumWithInitial = array1.reduce(
//     (sum1, sum2) => sum1 + sum2
// )

// console.log(sumWithInitial);

// const array = [15, 16, 17,18, 19];

// function reducer(previous, current, index, array){
//     const returns = previous + current;
//     console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
//     return returns;
// }

// array.reduce(reducer);

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// const interview = ["Interview"]

// console.log(interview.slice(0, 5))

// console.log(interview.slice(5))


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(
//     word => word.indexOf('limit')
// )

// const found = words.find(element => element == 'elite')

// console.log(result);

// console.log(found);

// const inventory = [
//     {name: 'apples', quantity: 2},
//     {name: 'bananas', quantity: 0},
//     {name: 'cherries', quantity: 5}
//   ];

//   function isCherries(fruit){
//       return fruit.name === 'cherries';
//   }

//   console.log(inventory.find(isCherries));

const countries = ['Finland', 'Estonia', 'Sweden', 'Norway'];

// const newCountries = [];

// countries.forEach((country) => newCountries.push(country));

// console.log(newCountries);

// countries.forEach((country, i, arr) => console.log(i, country, arr));

// const numbers = [1,2,3,4,5]

// let sum = 0;
// numbers.forEach((add) => (sum+= add))
// console.log(sum);

// const newCountries = countries.map((country) =>  country.length)

// console.log(newCountries);

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map((n) => n**2)

// console.log(squares);

// const countrieswithLand = countries.filter((country) => country.includes('land'));

// console.log(countrieswithLand);

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const even = numbers.filter((n) => n % 2 ==0)
// const odd = numbers.filter((n) => n % 2 !== 0)

// console.log(even);
// console.log(odd);

// const sum = numbers.reduce((acc, cur) => acc + cur, 5);

// console.log(sum);

// const strs = ['Hello', 'World', '!']

// const helloWorld = strs.reduce((acc, cur) => acc + ' ' + cur);

// console.log(helloWorld);

// const value = numbers.reduce((acc, cur) => acc * cur);

// console.log(value);

// const firstEvenNUm = numbers.find((n) => n %2 === 0)
// const secondNum = numbers.find((n) => n %2 !== 0);

// console.log(firstEvenNUm);
// console.log(secondNum);

// class Person {
//     constructor(firstName, lastName, address){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.address = address
//     }

//     first(){
//         const firstN = this.firstName;
//         return firstN
//     }
// }
// const person1 = new Person('Henry', 'Oko', 'Beau Bassin');
// const person2 = new Person('Sam', 'Jack', 'Quattre Bonnes');
// console.log(person1.first());
// console.log(person2);

// class Person{
//     constructor(firstName, lastName, age, country){
//         this.firstName
//         this.lastName
//         this.age
//         this.score =0
//         this.country
//     }
//     get getScore(){
//         return this.score
//     }
// }

// const person1 = new Person('Henry', 'Oko', 25)

// console.log(person1.getScore);


// var default_rate = 0.1;
// var rate = 0.5;

// function getAmount(){
//     if(!rate){
//         var rate = default_rate;
//     }
//     return rate;
// }

// console.log('Your rate i: ', getAmount())


// function medianOfArray(array){
//     var length = array.length;
    
//     //Odd
//     if(length % 2 == 1){
//         let Odd  = array[Math.floor(length/2)];
//         console.log(Odd)
//     }else{
//         //Even
//         let Even = (array[length/2]+array[length/2 -1 ]/2);
//         console.log(Even);
//     }
// }

// function medianOfTwoSortedArray(arr1, arr2, pos){
//     if(pos <= 0){
//         return -1;
//     }
//     if(pos == 1){
//         return (arr1[0] + arr2[0])/2;
//     }
//     if(pos == 2){
//         return (Math.max(arr1[0]) + Math.min(arr1[1],arr2[1])) / 2;
//     }
//     let median1 = medianOfArray(arr1), 
//     median2 = medianOfArray(arr2);

//     if(median1 == median2){
//         return median1;
//     }

//     let evenOffset = pos % 2 == 0 ? 1: 0,
//     offsetMinus = Math.floor(pos/2) - evenOffset
// }

// function commonElements(kArray){
//     let hashmap = {}, last, answer = [];

//     for(let i =0, kArrayLength = kArray.length; i < kArrayLength; i++){
//         let currentArray = kArray[i];
//         last = null;
//         for(let j = 0, currentArrayLen = currentArray.length; j < currentArrayLen; j++){
//             let currentElement = currentArray[j];
//             if(last != currentElement){
//                 if(! hashmap[currentElement]){
//                     hashmap[currentElement] = 1;
//                 }else{
//                     hashmap[currentElement]++;
//                 }
//             }
//             last = currentElement;
//         }
//     }

//     for(let prop in hashmap){
//         if(hashmap[prop] == kArray.length){
//             answer.push(parseInt(prop));
//         }
//     }
//     return answer;
// }

// commonElements([1,2,3], [1,2,3,4], [1,2]);

// function Matrix(rows, columns){
//     let jaggedarray = new Array(rows);
//     for(let i = 0; i < columns; i +=1){
//         jaggedarray[i] = new Array(rows);
//     }
//     return jaggedarray;
// }

// console.log(Matrix(3,3));

// let javaScriptObject = {};
// let testArray = [1,2,3,4];

// javaScriptObject.array = testArray;
// javaScriptObject.title = 'Algorithms'
// console.log(javaScriptObject);

function ExampleClass(name, size){
    let privateName = name;
    let privateSize = size;

    this.getName = function(){
        return privateName;
    }
    this.setName = function(name){
        privateName = name;
    }
}
let example1 = new ExampleClass("Public", 5);
console.log(example1);









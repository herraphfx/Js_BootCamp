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

var sentence = "the quick brown fox jumped over the lazy dog";
let words = sentence.split(" ");
for(let i = 0; i < words.length; i++){
    console.log(words[i])
}



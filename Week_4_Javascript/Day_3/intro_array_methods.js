// let amount = [2 , 3 ,4, 3, 4];

// let TAX = 1.17;

// let newAmount = amount.map((value, index, arr) => {
//     let elem = value * TAX
//     console.log(elem);
// });

// let username = 'john'
// function checkName(){
    
//     let username = 'sarah';

//     username = 'dr house'
//     console.log(username);
// }

// console.log(username);

// checkName();
// console.log(username);


//Map is equivalent to function
function map(arr, transform){ //array, function
    let mapped = [];

    for(let elem of array){
        mapped.push(transform(element));
    }
    return mapped;
}

let arr_num = [1,2,3,4];

// function arr_num(num){
//     return num * 2;
// }

// console.log(arr_num);

// Using map method
// let arr_method = arr_num.map(value => value * 2);
// console.log(arr_method); //You dont need to push in map


//Using forEach
// let mapped_2 = [];
// arr_num.forEach((value) => {
//     mapped_2.push(value);   
// })
// console.log(mapped_2);

//Filtering

function filter(arr, test){
    let passed = [];

    for(let element of arr){
        if(test(element)){
            passed.push(element);
        }
    }
    return passed;
}
    function above2 (num){
        return num > 2 ? true : false;
    }
    


console.log(filter(arr_num, above2));

//Filter method 
let arr_filter = arr_num.filter((value) => value * 2 );
console.log(arr_filter);

//Reduce  Method Process
function reduce(arr, combine, start){
    let current = start;
    for(element of arr){
        current = combine(current, element) // define where it will start
    }
    return current;
}



function sum(num1, num2){
    return num1 + num2;
}

console.log(reduce(arr_num, sum, 0));

//Reduce method

let elem_reduce = arr_num.reduce(sum, 0)
console.log(elem_reduce);


//Reduce Exercise

// let party = [
//     {
//       desert: 'Chocolate Mousse',
//       calories: 30,
//     },
//     {
//       desert: 'Apple Pie',
//       calories: 15,
//     },
//     {
//       desert: 'Croissant',
//       calories: 50,
//     },
//     {
//       desert: 'Strawberry Icecream',
//       calories: 5,
//     },
//   ]


//   let sum_calories = party.reduce(sum, 0);
//   console.log(sum_calories);

//Destructuring
let a, b, rest;
[a, b] = [10, 20];
rest = [30,40,50]

console.log(a);
console.log(b);
console.log(rest);

const iterable = [a , b, ...rest];
console.log(iterable);



//Error Handling try-catch
try{
    //normal code
    
    console.log(div);
}
catch(err){
    //handle the error
    console.log(err);


}

//Map Array Method
//We want a new array 
// const restaurant = [20,15,2,10];

// const TAXES = 1.17;

// let priceswithTaxes = restaurant.map((element, index, array) => {
//     return element * TAXES;
// })

// console.log(priceswithTaxes);

const students = [
    {name: 'Rich', score: 33},
    {name: 'Peter', score: 52},
]


//Return the score
// let studentScore = students.map((element, index, array) => {
//     return element.score;
// });

// console.log(studentScore);

//Return the score and a new elemenet
let studentNEw = students.map((element, index, array) => {
    let newScore = element.score > 50 ? true : false;

    return {
        name: element.name,
        score: element.score, 
        newscore: newScore
    }
})

console.log(studentNEw);

const numbers = [2,3,4,5,6,7,8];
//create an array of even number

let evenNumbers = numbers.filter((element, index, array) => {
    return element % 2 === 0
})

console.log(evenNumbers);
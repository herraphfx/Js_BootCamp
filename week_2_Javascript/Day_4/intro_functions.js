function name_of_function(parameters){

}

let a =1;
let b = 2;

function find_sum(num1, num2){
    let sum = num1 + num2;
    console.log(sum);
}
//Calling or invoking a function
find_sum(a,b);

//function with return value

function find_sum_return(num1, num2){
    let sum = num1 + num2;
    return sum;
}

let addition1 = find_sum_return(a,b);
    console.log(addition1);

//function without any parameter

function piece_of_code(){

}

//Custom function by Uncle Henry

//Take in array and return capital letter

function uncle_henry_custom_function(arr){
    let output = "";
    for(let str of arr.sort()){
        output += str.charAt(0);
    }
    return output;
}

let h =['Oliver', 'Wayne', 'Dheeksha', 'Henry'];
console.log(uncle_henry_custom_function(h));


//Function with default parameter

function find_sum_return_default(num1=null, num2=null){
    let sum = null;

   if(num1 === null){
            console.log('No parameter passed')
        }
    else if(num2 === null){
        console.log("Second parameter is missing");

    }

    else{
        let sum = num1 + num2;
        return sum;
    }
    
}


// function find_sum_return_default(num1, num2=0){
//     let sum = num1 + num2;
//     return sum;
// }

console.log(find_sum_return_default(8));

//Exercise

function parent_age(myAge){

    let mum_age = myAge * 2;
    let dad_age = mum_age * 1.2;
    console.log(mum_age, dad_age);
}
parent_age(40);


//Arrow function

arrow_function = (num1,num2) => {
    let sum = num1 + num2;
    console.log(sum);
}
arrow_function(1,2);

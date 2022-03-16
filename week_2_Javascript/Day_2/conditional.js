let a = 4;

//if statement
if(a >= 5 ){
    console.log("a is greater than five");
}

//if and else statement
if(a > 1){
    console.log('a is greater than one');
} 
else{
    console.log('a is not greater than one')
}

//if else if .. statement

if(a > 2){
    console.log('a is greater than two');
}

else if(a == 2){
    console.log('a is equal to two');
}
else if( a < 2){
    console.log('a is smaller than two')
}

else if(typeof('')){
    console.log('a is a string');
}

else{
    console.log('a is not a number');
}

console.log('======')

//Exercise 3. Keyless car

// let age_1 = prompt("Please enter your age");


// if(age_1 < 18){
//     alert("Sorry, you are too young to drive this car. Powering off");
// }
// else if(age_1 == 18){
//     alert("Sorry, you are too young to drive this car. Powering off");
// }
// else if(age_1 > 18){
//     alert("Powering on. Enjoy the ride");
// }

// else{
//     alert("Unexpected in. Input is not a number Please enter a number");
// }

//Switch

let c =5;
switch(c){
    case 0:
        console.log('C is Zero');
        break;

    default:
        console.log('c is none of the above');
}


//Exercise convert

let browser = 'Firefox';

if (browser == 'Edge'){
    alert("You've got the Edge!");

}

else if (browser == 'Chrome' || 'Firefox' || 'Safari' || 'Opera'){
    alert("Okay we support these browsers too");
}

else{
    alert('We hope that this page looks ok!');
}







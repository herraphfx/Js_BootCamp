//Changing background to light blue

let styl_div = document.querySelector('div');

styl_div.style.backgroundColor = 'lightblue';
styl_div.style.padding = '30px';


//add border to the second name
let blue_nd = document.getElementsByTagName('ul')

let blue_nd2 =  blue_nd[0].children[1];

blue_nd2.style.border = '1px solid black';


//change font size of the border
let body1 = document.getElementsByTagName('body');

body1[0].style.fontSize = '30px';

let blue_nd3 = document.getElementsByTagName('li');

let blue_nd4 = blue_nd3[0].innerText;
let blue_nd5 = blue_nd3[1].innerText;


//Alert the function to dispaly names.
console.log(blue_nd4 + " and " + blue_nd5 + " are the names on the div");

 function alerting() {
     
    if(styl_div.style.backgroundColor === 'lightblue'){
        alert('Hello x and y');
    }
}
alerting();



//DOM Exercise 2 XP 


//Change Pete to Richard
let changePeter = document.getElementsByClassName('list');
chan = changePeter[0].lastElementChild;

chan.innerText = 'Richard';


//Change any element to my name
chan2 = changePeter[1].firstElementChild;
chan2.innerText = 'Henry';


//add an element and add text -  'Hey Student'
let li_elem = document.createElement('li');
let text = document.createTextNode('Hey Students');

li_elem.appendChild(text);

final_hey = changePeter[0].appendChild(li_elem);
console.log(final_hey);

final_hey2 = changePeter[1].appendChild(li_elem);
console.log(final_hey2);


//Removing by copying the selector from google chrome.

// let second_elem = document.querySelectorAll('body > ul:nth-child(3) > li:nth-child(2)'). //copied the selector code from google chrome
// second_elem[0].remove();

//Alternatively

let secondLI = document.getElementsByTagName('ul');
newLI = secondLI[1].children[1];
newLI.remove();
    []
//add class name student_list to both ul


secondLI[0].classList.add('student_list');

secondLI[1].classList.add('student_list');

//add class university, attendance to the first ul

secondLI[0].classList.add('university');
secondLI[0].classList.add('attendance');












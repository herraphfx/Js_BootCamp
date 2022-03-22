let elem = document.getElementById('title');

console.log(elem);

elem.style.color = 'red';
elem.innerText = 'Oliver'

let body = document.body;

// body.style.backgroundColor =  'blue';

console.log(body.firstChild);
console.log(body.firstElementChild);
console.log(body.lastElementChild);

// console.log(body.childNodes);   //List of tags


//Using ID

let div1p1 = document.getElementById('div1-p1');
console.log(div1p1);

//Using Tag
let divs = document.getElementsByTagName('div');

for(div of divs){
    console.log(div);
}

//Using Class

let reds = document.getElementsByClassName('red');

for(let red of reds){
    console.log(red);
}

//Query Selector

let queryS = document.querySelector('h1');
console.log(queryS);

let queryS1 = document.querySelectorAll('div p')
console.log(queryS1);

//Exercise



//Create elements
let elem_h2 = document.createElement('h2');
elem_h2.innerHTML = 'It is raining a lot';

div1p1.appendChild(elem_h2);


//innerText and innerHTML

let elem_txt = document.querySelector('#div2');
console.log(elem_txt);

elem_txt.innerText ='Hi There'


console.log(elem_txt.hasAttribute('id'));
console.log(elem_txt.getAttribute('id'));
console.log(elem_txt.setAttribute('username', 'oliver'));



let para = document.querySelector('#socialNetworkNavigation > ul > li:nth-child(6)');

console.log(para.textContent);








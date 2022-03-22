let changePeter = document.getElementsByClassName('list');
chan = changePeter[0].lastElementChild;

chan.innerText = 'Richard';


console.log(chan);

chan2 = changePeter[1].firstElementChild;
chan2.innerText = 'Henry';

console.log(chan2);

let li_elem = document.createElement('li');
let text = document.createTextNode('Hey Students');

li_elem.appendChild(text);

final_hey = changePeter[0].appendChild(li_elem);
console.log(final_hey);

final_hey2 = changePeter[1].appendChild(li_elem);
console.log(final_hey2);

new_attr = document.getElementsByTagName('ul');



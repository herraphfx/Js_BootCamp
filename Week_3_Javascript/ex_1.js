let elem_a = document.getElementById('dI');

console.log(elem_a.getAttribute('href'));
console.log(elem_a.getAttribute('hreflang'));
console.log(elem_a.getAttribute('rel'));
console.log(elem_a.getAttribute('target'));
console.log(elem_a.getAttribute('type'));



let elem_b = document.getElementById('navBar');

console.log(elem_b.setAttribute('id','socialNetworkNavigation'));

let li_elem = document.createElement('li');
let text = document.createTextNode('logout');

li_elem.appendChild(text);

let up_ul = document.getElementsByTagName('ul');


console.log(up_ul[0]);




up_ul[0].appendChild(li_elem);

console.log(up_ul[0].firstElementChild.textContent);

console.log(up_ul[0].lastElementChild.textContent);






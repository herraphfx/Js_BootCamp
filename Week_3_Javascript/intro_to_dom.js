console.log('===')


let div1p1 = document.getElementById('div1-p1');
console.log(div1p1);

let elem_h2 = document.createElement('h2');
elem_h2.innerHTML = 'It is raining a lot';

div1p1.appendChild(elem_h2);
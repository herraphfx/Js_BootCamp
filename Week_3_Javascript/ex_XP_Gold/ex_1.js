//Exercise 1

allBooks = {
    title: ['harry potter', 'intelligent investor'],
    author: ['JK Rowling', 'Benjamin Graham'],
    image: 'www.google.com',
    alreadyRead: true
}

let body = document.body;
for(item in allBooks){

let div_element = document.createElement('div');
div_element.setAttribute('class', 'listBooks');

div_element.innerText = allBooks[item];
 
body.appendChild(div_element);

// write = allBooks.title[0];
// console.log(write);


}
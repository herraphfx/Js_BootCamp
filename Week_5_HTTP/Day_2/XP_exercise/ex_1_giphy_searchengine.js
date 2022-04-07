//Initilize a new request
let xhr = new XMLHttpRequest;

//Open
let search = 'hilarious'
let url = `https://api.giphy.com/v1/gifs/search?q=${search}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`

xhr.open('GET', url)

console.log(xhr.readyState); //1

//add header

xhr.setRequestHeader('Content-Type', 'application/json');

//Response data in json
xhr.responseType = 'json';


xhr.send();

let data = [];
xhr.onload = function(){
    if(xhr.status === 200){
        console.log(xhr.response);
        data = xhr.response.data;
        console.log(data);
        display_data(data);
    }
    else{
        console.log(`Error ${xhr.status}: ${xhr.statusText}`)
    }
}

    let body = document.body;
    function display_data(){
        for(let gif of data){
            let div = document.createElement('div');
            let iframe = document.createElement('iframe');
            let title = document.createElement('h3');

            iframe.setAttribute('src', `https://giphy.com/embed/${gif.id}`)
            title.innerHTML = gif.title;
            title.style.width = '240px'

            div.appendChild(title);
            div.appendChild(iframe);
            body.appendChild(div);
        }
    }
   













let formData = new FormData(document.forms.person);
console.log(formData);

//Send data
let xhr = new XMLHttpRequest();
let url = "https://javascript.info/article/xmlhttprequest/post/user";
xhr.open('POST', url, {mode: 'no-cors'} );

xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader('Access-Control-Allow-Origin', "*");
xhr.setRequestHeader('Access-Control-Allow-Headers', "*");
xhr.withCredentials = false;

xhr.send(formData); //Use body to send data

xhr.onload = function(){
    if(xhr.status === 200){
        console.log(xhr.response);
    }
}

//Check Norris API

let chuck = new XMLHttpRequest();
chuck.open('GET', 'https://api.chucknorris.io/jokes/random');
chuck.responseType = 'json';
chuck.send();

chuck.onload = function(){
    if(chuck.status === 200){
        alert(`${chuck.response.value}`);
    }
}




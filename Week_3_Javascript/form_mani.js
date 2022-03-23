console.log("Forms");

//Accesing forms

let login_form = document.forms.login;
console.log(login_form);

//others ways of accesing forms

console.log(document.forms[0]);
console.log(document.getElementsByTagName('form')[0]);
console.log(document.querySelector('form'));
console.log(document.querySelectorAll('form')[0]);

//Get first element of the form

console.log(login_form.elements.username);
console.log(login_form.elements[0]);
console.log(login_form.elements['username']);


//change name of attribute in form
login_form.elements['username'].setAttribute('name', 'Damien');

//Get element by ID
let user_name = document.getElementById('username');

//set inout value
user_name.value = 'Damien';

//Stop the page from refreshing
login_form.addEventListener('submit', (ev) =>{
    ev.preventDefault();
})

//function to retrieve getData
function getData(){
    let user = document.getElementById('username').value;
    let pwd = document.getElementById('password').value;
    console.log(user, pwd);
}

//event listener 
user_name.addEventListener('input', function(ev){
    console.log(user_name.value);
})

let pw = document.getElementById('password');
pw.addEventListener('input', function(ev){
    console.log(pw.value);
})
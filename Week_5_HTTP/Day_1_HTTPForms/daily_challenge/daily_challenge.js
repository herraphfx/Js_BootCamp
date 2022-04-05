
function myFunction(ev){
    ev.preventDefault();
    let users_1 = document.forms.challenge.name_1.value;
    let users_2 = document.forms.challenge.name_2.value;

    console.log(JSON.stringify({users_1, users_2}))
    return JSON.stringify({users_1, users_2});
}





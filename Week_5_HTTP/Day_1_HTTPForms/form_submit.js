//Submit form
let contact_form = document.getElementById('contact');

contact_form.addEventListener('Submit', (ev) =>{
    ev.preventDefault();
})

function submit_func(){
    console.log('Submitted');
}
contact_form.onsubmit = submit_func;

//Passoword validation assignment
// 1 special Character 
// 2 one upper case 
// 3 one lower case 
// 4 atleast one number




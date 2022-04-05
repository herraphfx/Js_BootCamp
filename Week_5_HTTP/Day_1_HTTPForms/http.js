

//Accessing the form

let formNumbers = document.forms.numbers;
console.log(formNumbers);


//Get elements from form
let elem_one = formNumbers.elements.one;
console.log(elem_one);
console.log(elem_one.value);

//Get userFields

let user_Field = document.forms.user.userFields;
    

//Get elememt using shorthand
let login =document.forms.user.login;
console.log(login);

//Backreference
console.log(login.form);

//Form controls
//Get Value

console.log(elem_one.value);

//Get checked (boolean)

let control_form = document.forms.controls;
let ready = control_form.stresslevel;
console.log(ready.checked);

//Get textarea

let textarea = control_form.longtext;
console.log(textarea.value); //Retrieve value of text area

//Select and Options
console.log(select.options[5].selected);

//Set option from here
select.options[10].selected = true;
select.value = '6';
select.selectedIndex =4;

//Add new options
let select_options = document.getElementById('select');
let new_option = document.createElement('option');
new_option.value = 'MEGA STRESSED';
new_option.innerText = 'MEGA STRESSED!';

select_options.appendChild(new_option);

//another method of creating new option

let another_option = new Option('Hyper Stressed', '12', true, true);
select_options.appendChild(another_option);



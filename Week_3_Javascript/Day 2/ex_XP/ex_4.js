let submit_form = document.getElementById('MyForm');

submit_form.addEventListener('submit', (ev) =>{
    ev.preventDefault();
})


function compute(){
    let radius = document.getElementById('radius').value;

    let volumecal = (((4/3)*3.142* (radius * radius *  radius)));
    console.log(volumecal);

    

    submit_form.elements['volume'].setAttribute('value', `${volumecal}`);
    
}

compute();





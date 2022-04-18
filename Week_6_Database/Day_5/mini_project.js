let form = document.forms[0];
let inputName = form.name;
let inputDescription = form.description;
let inputStarttime = form.start_time;
let inputEndtime = form.end_time;




form.addEventListener('submit', (e)=>{
    e.preventDefault();
});


function getSend(){
    let name = inputName.value;
    let description = inputDescription.value;
    let start_time = inputStarttime.value;
    let end_time = inputEndtime.value;
    
    let schedule = {
        name: `${name}`,
        description: `${description}`,
        start_time: `${start_time}`,
        end_time: `${end_time}`
       
    };
    
    let data = JSON.stringify(schedule)
    localStorage.setItem('Schedule', data);
    window.location.reload();


    

    // localStorage.setItem('Name', name);
    // localStorage.setItem('Description', description);
    // localStorage.setItem('Start Time',start_time);
    // localStorage.setItem('End Time', end_time);
}
getSend();






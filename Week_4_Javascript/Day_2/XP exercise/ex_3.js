


let firstFortune = (number_of_children, partner) =>{
    secondFortune = (location, jobtitle) => {


        let displayText = document.createElement('div');
       displayText.innerHTML = `You will be a ${jobtitle} in ${location}, and married to ${partner} with ${number_of_children} kids`
        

       const currentDiv  = document.getElementById('div1-p1');
        
        currentDiv.appendChild(displayText);
     
    }
    secondFortune('Canada', 'Programmer');

}
firstFortune(3, 'Miggy');

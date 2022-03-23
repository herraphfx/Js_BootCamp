let body = document.body;

function inform(){
    let h1 = document.createElement('h1');
    h1.textContent = 'Button Clicked';

    body.appendChild(h1);

}
//alternatively, if you want to use DOM to set attributes

let btn2 = document.getElementById('btn-2');
btn2.setAttribute('onclick', 'inform()');



//Class work
let btnProfiles = document.getElementById('btn-3')
btnProfiles.onclick = create_profiles;

let main_div = document.createElement('div');
main_div.classList.add('main');

function create_profiles(){
    let js_ft_class =[
        {id: 1, user: 'Damien', email: 'damien@developers.institute'},
        {id: 2, user: 'Oliver', email: 'oliver@gmail.com'},
        {id: 3, user: 'Dheeksha', email: 'dheeksha@batman.com'},
        {id: 4, user: 'Henry', email: 'henry@tesla.com'},
        {id: 5, user: 'Wayne', email: 'wayne@spiderman.com'}
    ]
    
    for(let person of js_ft_class){
        let div = document.createElement('div');
        div.setAttribute('class', 'profiles');

        let img = document.createElement('img');
        img.setAttribute('src', `https://robohash.org/${person.id}?size=200x200`);
        div.appendChild(img);

        let h3 = document.createElement('h3');
        h3.textContent = person.user
        div.appendChild(h3);

        let email = document.createElement('h2');
        email.textContent = person.email;
        div.appendChild(email);


       main_div.appendChild(div);
    }
    body.appendChild(main_div);
}


//Add an event listener
btn2.addEventListener('click', function(ev){
    console.log('Button 2 click');
   ev.stopPropagation();
})

let div1 = document.getElementById('div1');

div1.addEventListener('click', function(ev){
    console.log('div1 2 click')
    
})



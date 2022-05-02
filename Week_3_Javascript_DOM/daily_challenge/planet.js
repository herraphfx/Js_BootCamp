
let planets = {
    Mercury: [],
    Mars: [],
    Earth: ['moon1'],
    Mars: ['moon1', 'moon2'],
    Jupiter: ['moon1', 'moon2', 'moon3'],
    Saturn: ['moon1', 'moon2', 'moon3', 'moon4'],
    Uranus: ['moon1', 'moon2', 'moon3'],
    Neptune: ['moon1', 'moon2', 'moon3']
}
 





let section = document.getElementsByTagName('section')[0];
for(let item in planets){
    let div = document.createElement('div');
    div.setAttribute('class', 'planet');
    div.classList.add(item);

    let count =0;
    for (let moon in planets[item]){
        let moon_div = document.createElement('div');
        moon_div.setAttribute('class', 'moon');
        moon_div.style.left = (40 * count).toString() + 'px';
        div.appendChild(moon_div);
        count++;
    }

section.appendChild(div);


// for(let item in planets){
//     let div = document.createElement('div');
//     div.setAttribute('class', 'moon');
//     div.classList.add(planets[item]);

// section.appendChild(div);
// }
}



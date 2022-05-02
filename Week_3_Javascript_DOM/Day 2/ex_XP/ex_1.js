


let lastP = document.getElementsByTagName('article')[0];

let removP = lastP.children[6];
//remove


removP.remove();
console.log(removP);


//on click turn red

let h2 = document.getElementsByTagName('h2')[0];

h2.addEventListener('click', function(ev){
    h2.style.backgroundColor ='red';
    
})
//on click hide h3

let h3 = document.getElementsByTagName('h3')[0];

h3.addEventListener('click', function(ev){
    h3.style.display = 'none';
    
})

function getClick(){
    let Clicked = document.getElementsByTagName('p');
    console.log(Clicked);

    for(p of Clicked){
    p.style.fontWeight ='bold';
    }
}


//changing to different px on mouse over
let h1 = document.getElementsByTagName('h1')[0];

h1.addEventListener('mouseover', function(){
    let random = Math.floor((Math.random() * 100) + 1);
    console.log(random);

  
    h1.style.fontSize =  random + 'px';

   
})


//hover on second paragraph to make it disappear.

// let fadeOut = document.getElementsByTagName('p')[1];

// fadeOut.addEventListener('mouseover', function(){
//     fadeOut.style.animationName = 'fadeOut1';    

// })



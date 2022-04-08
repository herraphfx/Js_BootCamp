
let form = document.forms.stars;

form.addEventListener('submit', submitForm);

function submitForm(event){
    event.preventDefault();
    console.log('Request');
    make_request();
}


function make_request(){
    let chuck = new XMLHttpRequest();
    let random = Math.floor((Math.random() * 82) + 1);
    chuck.open('GET', `https://swapi.dev/api/people/${random}`);
    chuck.responseType = 'json';
    chuck.send();
    
    
    let data = [];
    chuck.onload = function(){
        if(chuck.status === 200){
            console.log(chuck.response);
            data = chuck.response;
            console.log(data);
            appendData(data);
        }
    }

    chuck.onerror = function(){
        alert("Request failed!");
      }

      chuck.onprogress = function(){
        let progress = document.getElementById('progress');
        progress.innerHTML;
        appendData();
      }
}

// function getHomeworld(){
//     let chuck = new XMLHttpRequest();
//     let homeurl = chuck.response.homeWorld
//     chuck.open('GET', `https://swapi.dev/api/people/${random}`);
//     chuck.responseType = 'json';
//     chuck.send();
    
    
//     let data = [];
//     chuck.onload = function(){
//         if(chuck.status === 200){
//             console.log(chuck.response);
//             data = chuck.response;
//             console.log(data);
            
//         }
//     }

//     chuck.onerror = function(){
//         alert("Request failed!");
//       }

//       chuck.onprogress = function(){
//         let progress = document.getElementById('progress');
       
//       }
// }



function appendData(data){
    let namediv = document.getElementById('namediv');
    let heightdiv = document.getElementById('heightdiv');
    let genderdiv =document.getElementById('genderdiv');
    let birthdiv = document.getElementById('birthdiv');
    let homediv = document.getElementById('homediv');
    

   

    namediv.innerText = data.name; 

    heightdiv.innerText = 'Height: ' + data.height; 
    
    genderdiv.innerText = 'Gender: ' + data.gender;
    
    birthdiv.innerText = 'Birth: ' + data.birth_year;
    
    homediv.innerText = 'Home: ' + data.homeworld;
    

}





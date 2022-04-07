let process = (() => {
    let deletebtn = document.getElementById("delete");
    deletebtn.addEventListener('click', deleteImages);

    let form = document.getElementById('form');
    form.addEventListener('submit', getData)
  
})();

function deleteImages(){
    let images = document.querySelectorAll(".images");
    images.forEach((image)=>{
        image.remove();
    })
}


    function getData(e){
        e.preventDefault();
        let search = document.getElementById('search').value;
        // let num = Math.floor(Math.random() * 50);
        requestData(search);
        
    }
 


function requestData(a){
    let xhr = new XMLHttpRequest;
    let url = `https://api.giphy.com/v1/gifs/search?q=${a}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    xhr.open('GET', url)
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function(){
        if(xhr.status != 200){
            console.log('error')
        }
        else{
            console.log(xhr.response.data[0].images.original.url);
        }
    }

    xhr.onprogress = function(){
        console.log('progress', xhr);
    }

    xhr.onerror = function(){
        console.log('error', xhr);
    }
}

let body = document.body;
let container = document.createElement('div')
container.style.display = 'flex'
body.appendChild(container);





function displayResult(event){
    let imagecontain = document.createElement('div');
    let imagebox = document.createElement('img');
    let deletebutton = document.createElement('div');
    btn = document.createElement('button');
    deletebutton.appendChild(btn);
    imagebox.style.height = '200px'
    imagebox.style.width = '200px'

    btn.addEventListener('click', function(){
        imagecontain.remove();
    })

    imagebox.src = event

    imagecontain.appendChild(imagebox);
}


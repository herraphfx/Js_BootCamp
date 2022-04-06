//Create a request

let xhr = new XMLHttpRequest();

//Open the request

xhr.open('GET', 'https://zivuch.github.io/data.json');

//configure the response type
xhr.responseType = 'json';


//send the request over the network
xhr.send();

//receive the reponse

xhr.onload = function(){
    if(xhr.status != 200){
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
    }
    else{
        console.log(xhr.response);
    }
};

//Event that will be executed when Transmits data.
xhr.onprogress = function(event){
    if(event.lengthComputable){
        console.log(`Received ${event.loaded} of ${event.total} bytes`);
    }
    else{
        console.log(`Received ${event.loaded} bytes `);
    }
};

//
xhr.onerror = function(){
    console.log('Request failed');
}
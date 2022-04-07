//Ready States
//UNSENT = 0;
//OPENED= 1;
//HEADER RECEIVED =2;
//LOADING =3 
//DONE =4

let xhr = new XMLHttpRequest();

console.log(xhr.readyState); //0

// xhr.open(method, URL, [async, user, password])

let url = 'http://time.jsontest.com';

xhr.open('GET', url, true);

console.log(xhr.readyState); //1

//Add headers

xhr.setRequestHeader('Content-Type', 'application/json');



//send request
xhr.send();
console.log(xhr.readyState); 

// xhr.abort();
// console.log(xhr.readyState); 

//On progress
xhr.onprogress = function(event){
    if(event.lengthComputable){
        console.log(`Received ${event.loaded} bytes of the ${event.total} bytes`);
    }
    else{
       console.log(`Received ${event.loaded} bytes`); 
    }
    console.log(xhr.readyState);
}

// onload - Executed after response has been received and completed
xhr.onload = function() {
    if(xhr.status === 200) {
        console.log('OK');
        console.log(xhr.responseText);
        console.log(xhr.response);
        console.log(JSON.parse(xhr.response));
        // console.log(xhr.responseXML);
    }
    else {
        console.log('Error');
        alert(`Status code: ${xhr.status} - ${xhr.statusText}`);
    }
    console.log(xhr.readyState); // 4
}


xhr.onerror = function() {
    alert("Request failed!");
}


// ontimeout - when response take too long to return
xhr.ontimeout = function() {
    alert('Timeout! No response received in time.');
}





// xhr.onreadystatechange = function() {
//     console.log(`State: ${xhr.readyState}`);


//     if (xhr.readyState == 3) {
//       console.log("Data loading..."); //XMLHttpRequest.LOADING
//     }
//     else if (xhr.readyState == 4) {
//       console.log("request com pleted");
//     }
//   };


//   //Add headers - after request is open

//   xhr.setRequestHeader(GET,)

// xhr.setRequestHeader('Content-Type', 'application/json');

//Initialize request
let xhr = new XMLHttpRequest();

//Open
xhr.open('GET', 'https://zivuch.github.io/emails.xml');


//if you want the credential user name and password
xhr.withCredentials = false;


//because its XML the response typpe is document
xhr.responseType = 'document';
xhr.send();

//Load the function
xhr.onload = function(){

    if(xhr.status != 200){
      console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
    }
    else{
      console.log(xhr.response);
      loadXml(xhr.response);
    }
  }

//Shows the progress of the transmission
  xhr.onprogress = function(event) {
    if (event.lengthComputable) {
      console.log(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
      console.log(`Received ${event.loaded} bytes`); // no Content-Length
    }
  };
  
  xhr.onerror = function() {
    console.log('Error something wrong###');
  };


  function loadXml(xmlDoc) {
    var cd = xmlDoc.getElementsByTagName("email");
    for (let i = 0; i <cd.length; i++) {
        console.log(cd[i].getElementsByTagName("to")[0].childNodes[0].nodeValue);
        console.log(cd[i].getElementsByTagName("from")[0].childNodes[0].nodeValue);
    }
}


  
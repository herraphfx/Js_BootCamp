(function() {
    let httpRequest;

    //Create a button and add an event listener

    document.getElementById("ajaxButton").addEventListener('click', makeRequest);
  
    function makeRequest() {
      // create XMLHttpRequest
      httpRequest = new XMLHttpRequest();


      if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
      }
  
      // handle the response
      httpRequest.onreadystatechange = alertContents;


      // initialize XMLHttpRequest
      httpRequest.open('GET', 'test.html');

       
      // send
      httpRequest.send();
    }
  
    function alertContents() {
      // If the state has the value of `XMLHttpRequest.DONE` : the full server response was received and it's OK for you to continue processing it.
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
          // check the HTTP response status codes of the HTTP response
        if (httpRequest.status === 200) {
          alert(httpRequest.responseText);
        } else {
          alert('There was a problem with the request.');
        }
      }
    }
  })();
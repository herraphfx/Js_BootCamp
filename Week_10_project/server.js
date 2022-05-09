

let url = "http://api.openweathermap.org/data/2.5/forecast?lat=32.109333&lon=34.855499&appid=bf8bdc6ff3f8af3bd4bad0fa482bfc3c";

fetch(url)
.then(function(response){
    console.log(response.json());
}
)
.catch(function(response){
    console.log('An Error occured');
    console.log(response);
})


async function get_city(){
    let city = await fetch(url)
  
    let data = await city.json();
    console.log(data);
   return data
}

let new_city = get_city();

console.log(new_city)







// let xhr = new XMLHttpRequest();

// console.log(xhr.readyState); 
// // xhr.open(method, URL, [async, user, password])

// let url = 'http://dataservice.accuweather.com/currentconditions/v1/topcities/50?apikey=1sHRW57gDYemvJxLAx4O5gMabqJbAGDZ'

// xhr.open('GET', url, {mode: "no-cors"});

// console.log(xhr.readyState); //1

// //Add headers

// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.setRequestHeader('Access-Control-Allow-Origin', "*");
// xhr.setRequestHeader('Access-Control-Allow-Headers', "*");
// xhr.withCredentials = false;
// //send request
// xhr.send();
// console.log(xhr.readyState); 

// xhr.onload = function() {
//     if(xhr.status === 200) {
//         console.log('OK');
//         console.log(JSON.parse(xhr.response));
//     }
//     else {
//         console.log('Error');
//         alert(`Status code: ${xhr.status} - ${xhr.statusText}`);
//     }
//     console.log(xhr.readyState); 
// }

// //Fetching data


let url = "https://swapi.dev/api/people/1";

fetch(url)
.then(function(response){
    console.log(response);

    console.log(response.json());
}
)
.catch(function(response){
    console.log('An Error occured');
    console.log(response);
})

async function get_character(){
    let character = await fetch(url)

    let data = await character.json();
    console.log(data);
    console.log(data.name);
    return data;
}


//This will run in parallel and async
let character = get_character()
//When this line is run. character.namr
console.log(character.name);


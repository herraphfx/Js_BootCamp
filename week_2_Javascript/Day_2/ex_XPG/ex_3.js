let input = prompt("Please enter a verb");

input = input.trim();

let len = input.length;
console.log(len);

if(len >= 3){
    if(!input.endsWith('ing')){
        console.log("does not end with ing");
        if(input.endsWith('n')){
            input += 'n';
        }
        else if(input.endsWith('m')){
            input += 'm';
        }
        input += 'ing';
    }
    else{
        console.log('Ends with ing');
        input += 'ily'
    }
}

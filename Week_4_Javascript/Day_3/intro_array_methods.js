let amount = [2 , 3 ,4, 3, 4];

let TAX = 1.17;

let newAmount = amount.map((value, index, arr) => {
    let elem = value * TAX
    console.log(elem);
});

let username = 'john'
function checkName(){
    
    let username = 'sarah';
    
    username = 'dr house'
    console.log(username);
}

console.log(username);

checkName();
console.log(username);
let age = [20,5,12,43,98,55];




let age_2 = 0;
for(let age_1 of age){
    
    agesum = age_2+=age_1;
    
}

console.log(agesum);
//largest number

var largest = age[0];

for (var i = 0; i < age.length; i++) {

    if (largest < age[i] ) {
        largest = age[i];

       
    }
}
console.log(largest);
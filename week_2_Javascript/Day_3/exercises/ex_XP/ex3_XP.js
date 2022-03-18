repeatQ = prompt('Please Enter a number');

console.log(typeof repeatQ);

repeatQ = Number(repeatQ);

while(repeatQ < 10){
    repeatQ("Please enter another number greater than 10");
    repeatQ = Number(repeatQ);
}

console.log(repeatQ);




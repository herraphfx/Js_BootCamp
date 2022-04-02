checkS = [prompt('Type something')];

checkS.forEach(element => {
   typeof element =='string' ?
       console.log(true) :   console.log(false);
   
});
console.log(checkS);
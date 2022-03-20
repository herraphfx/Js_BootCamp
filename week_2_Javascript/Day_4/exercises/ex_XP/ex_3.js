//Part 1
function isDivisible(){
    let total = 0;
    for(i=0; i < 500; i++){
        
        if(i % 23 == 0){
            console.log(i);
        }
        total+=i;
    }
   
    console.log(total);

}

isDivisible();


//Part 2
function isDivisible_1(divisor){
    let total = 0;
    for(i=0; i < 500; i++){
        
        if(i % divisor == 0){
            console.log(i);
            total+=i;
        }
       
    }
   
    console.log(total);

}

isDivisible_1(3);
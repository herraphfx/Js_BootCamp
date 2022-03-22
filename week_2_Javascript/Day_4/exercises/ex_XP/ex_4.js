let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

shoppingList = ['banana', 'orange', 'apple'];



function myBill(){
    let total = 0;
    for(let stocks of shoppingList){
        if(stock[stocks] > 0){
            total += prices[stocks];
            console.log("1 X " + stocks + " at $" +prices[stocks]);
            stock[stocks]--;          //Decrease item by 1
                }
       
       
    }
    return total;
}

let bill = myBill();
console.log(bill);

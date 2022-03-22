//Making the input better

// let input = prompt('Enter bill amount');
// let arr = input.split('');


// let bill =null;
// for(let idx in arr) {
//     let character = Number(arr[idx]);
//     if(!NaN(character) && character != " "){
//         console.log(arr[idx]);
//         bill = Number(arr.slice(idx));
//         break;
//     }
// }


amount_bill = prompt("John, enter the amount ");
    new_amount_bill = Number(amount_bill);
function calculateTip(bill){
    let tip = 0;
    if(bill < 50){
        tip = bill * 0.2;
    }
    else if(bill >= 50 && bill <= 200){
        tip = bill * 0.15;
    }
    else if(bill > 200){
        tip = bill * 0.1;
    }
    console.log(tip);
}
calculateTip(new_amount_bill);






// function calculateTip(cost) {
//     if (cost < 50) {
//         console.log(cost * 0.2) ;
//     }
//     if (cost <= 200) {
//         console.log(cost * 0.15) ;
//     }
//     else{
//         console.log(cost * 0.1);
//     }
    
// }

// console.log("Amount paid is " + new_amount_bill);
// calculateTip(new_amount_bill);


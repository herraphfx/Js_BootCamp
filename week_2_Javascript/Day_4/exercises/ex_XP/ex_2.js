//Making the input better

// let input = prompt('Enter bill amount');
// let arr = input.split('');


// let bill =null;
// for(let idx in arr) {
//     let character = Number(arr[idx]);
//     if(!NaN(character) && character != ""){
//         console.log(arr[idx]);
//         bill = Number(arr.slice(idx));
//         break;
//     }
// }





function calculateTip(){

    amount_bill = prompt("John, enter the amount ");
    new_amount_bill = Number(amount_bill);
    console.log(new_amount_bill);
 
    if(new_amount_bill < 50){
        tip = new_amount_bill * 0.2;
        console.log('I will tip ' +'$'+tip);
    }

    else if(new_amount_bill >= 50 || new_amount_bill < 200){
         tip1 = new_amount_bill * 0.15;
         console.log('I will tip ' +'$'+tip1);
    }

    else if(new_amount_bill >= 200){
     tip2 = new_amount_bill * 0.15;
     console.log('I will tip '+'$'+tip2);
    }
}


//    function calculateTip_1(){
//     amount_bill = prompt("John, enter the amount ");
//     new_amount_bill = Number(amount_bill);
//     if(new_amount_bill > 200){
//         tip = new_amount_bill * 0.1;
//         console.log('I will tip '+ tip);
 
//     }
//    }
//    calculateTip_1();



calculateTip();

// let bankAmount = '30000';

// let Vat = 0.17;

// let details = ["+200", "-100", "+146", "+167", "-2900"];

// //Positive and Negative numbers 
// let positiveArray = [];
// let negativeArray = [];

// for(numberelem of details){
//     if(numberelem < 0){
//         negativeArray.push(numberelem)
        
//     }
//     else{
//         positiveArray.push(numberelem);
//     }
// }
// //Get the VAT.

// let totalTax = 0;
// for(vat_tax of negativeArray){
//     vat_tax *= Vat;
//     totalTax += vat_tax;
//     }


let bankAmount = prompt('How much do you have in your account ?');

bankAmount = Number(bankAmount);
const VAT = 0.15;

let transactions = ["+200", "-100", "+146", "+167", "-2900"];

transactions.forEach((trans, index, arr) => {
    console.log(Number(trans));
    trans = Number(trans);
    trans < 0 ? arr[index] = (trans*VAT).toFixed(2) : console.log('No log');

    bankAmount += Number(arr[index]);
    console.log(bankAmount);
})

console.log(transactions);
console.log(bankAmount);







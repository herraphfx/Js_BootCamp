// for(let i=0; i <= 10 ; i++){
//     if(i % 2 == 0){
//         console.log(i + ' is an even number');
//     }
//     else{
//         console.log(i + ' is an odd number');
//     }
// }

arr = ['a', 'b', 'c', 'd','e','f'];

// for(let i in arr){
//     console.log(i, arr[i]);
// }

let obj = {
    user: 'damien',
    email: 'herraph@gmail.com',
    tele: 56040930
}

for(let key in obj){
    console.log(key, obj[key]);
}

// for of , works for only array to get the value

// for(let val of arr){
//     console.log(val);
// }

// arr.forEach(elemento => { console.log(elemento)
    
// });

let names= ["john", "sarah", 23, "Rudolf",34];

// for(let name of names){
//     // console.log(name);
//     let nameType = typeof name;
//     // console.log(nameType);

//     if(nameType === 'string'){
//         name = name.replace(name.charAt(0), name.charAt(0).toUpperCase());
//         console.log(name);
//     }
// }

//WHILe Loop

let count = 0;
 while(count < arr.length){
     console.log(arr[count]);
     count++;
 }


 let matrix = [
     [2,3,4],
     [4,5,6],
     [6,7,8],
     [8,9,10],
     [10,11,12]
 ]

 for(let row in matrix){
     console.log(matrix[row]);
     for(let col in matrix[row]){
         console.log(matrix[row][col]);
     }
 }

//Self invoking function

(function (name){
    alert('Hello '+ name);
})('Sarah');

//Nested function 1
function addSquares(a ,b ){
    function square(x){
        return (x * x);
    }
    return square(a) + square(b);
}
a = addSquares(2,3);
console.log(a);

//Nested function 2

const humus = function(factor){
    const ingredient = function(amount, unit, name){
        let ingredientAmount = amount * factor;
        if(ingredient >1){
            unit += 's'
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    }
    ingredient(1, 'can', 'chickpeas' );
    ingredient(3, 'don', 'papaya');
};
humus(2);

// function add() {
//     let counter = 0;
//     function plus() {
//         counter += 1;
//         console.log(counter) ;
//     }
//     plus();  
//   }
  
//   add()

//Closure

// function outside(x){
//     function inside(y){
//         return x + y;
//     }
//     return inside;
// }
// let fnInside = outside(6);
// console.log(fnInside);
// console.dir(fnInside);

// let myCar = new Object();

// myCar.make = 'Ford';
// myCar.model = 'Mustang'
// myCar.year = 1969;

// console.log(myCar);

// let myObj = new Object();

// str = 'myString',
// rand = Math.random()

// myObj.type = 'Dot Syntax';
// myObj['date created'] = 'String with space';
// myObj[rand] = 'Rand Number';


// console.log(myObj);

let myCar = new Object();

let propertyName = 'make';
myCar[propertyName] = 'Ford';

propertyName = 'model';
myCar[propertyName] = 'Mustang';

console.log(myCar);

//Looping through an object

function showProps(obj, objName){
    let result = '';
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            result += `${objName}.${i} = ${obj[i]}\n`
        }
    }
    return result;
}
showProps(myCar, 'myCar');

let i;
function numbers() {
    
for (let i = 0; i < 5; i += 1) {
      console.log(i);
    }

      console.log(i);
  }
  numbers();


  function checkAge(age) {
  
  
    return (age < 18 ? 'Sorry you are old' : "Come and Eat");
  }
  
  console.log(checkAge(17));

  const calculate = (a,b, operator) => {
      return operator === "+" ? a + b : operator === "-" ? a - b : operator === "*" ? a * b : "Unexpected";
    }
  console.log(calculate(2,3,'+'));


  //For Each Array method

  let myArray = [2 , 3, 4, 5, 6];

  myArray.forEach((value, index) => {
    console.log('Numbers : ' , value, 'at index',index);
  });

//Additional methods

//Include
console.log(myArray.includes(4));

let character = 'How are you boy';

console.log(character.padStart(2));

//Flat 
let arr = ["blue", ["red", "yellow"], "green", [4, 5, 6]];
let flattened = arr.flat();
console.log(flattened);



  
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

const country = "USA";
console.log([...country]);
//breaks USA into letter arrays

let newArray = [...[,,]];
console.log(newArray); //undefined
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}


console.log(building.numberOfFloors);
//apartments in first and third floor
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);
//name of second tenant and floors

console.log(building.nameOfTenants[1] + " = "+ building.numberOfRoomsAndRent.dan[0]);

let rent_sarah = building.numberOfRoomsAndRent.sarah[1];
let rent_david = building.numberOfRoomsAndRent.david[1];
let rent_dan = building.numberOfRoomsAndRent.dan[1];

if( rent_sarah + rent_david > rent_dan){
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log(building);